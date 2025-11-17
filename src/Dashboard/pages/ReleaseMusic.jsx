import React, { useEffect, useState, useMemo } from "react";
import { fetchTracksApi } from "../../apis/TrackApis";
import { UploadTrack } from "../components/UploadTrack";
import { Eye, Edit2, Search } from "lucide-react";

const statusOptions = [
  { value: "all", label: "All Status" },
  { value: "pending", label: "Pending" },
  { value: "live", label: "Live" },
  { value: "suspend", label: "Suspend" },
  { value: "reject", label: "Reject" },
  { value: "hold", label: "Hold" },
];

const sortOptions = [
  { value: "createdAt_desc", label: "Newest first" },
  { value: "createdAt_asc", label: "Oldest first" },
  { value: "title_asc", label: "Title A-Z" },
  { value: "title_desc", label: "Title Z-A" },
  { value: "status_asc", label: "Status A-Z" },
  { value: "status_desc", label: "Status Z-A" },
];

export const ReleaseMusic = () => {
  const [tracks, setTracks] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalPages: 1,
    totalItems: 0,
  });
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("createdAt_desc");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [editTrack, setEditTrack] = useState(null);
  const [viewTrack, setViewTrack] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const { sortBy, sortOrder } = useMemo(() => {
    const [field, direction] = sort.split("_");
    return {
      sortBy: field,
      sortOrder: direction === "asc" ? "asc" : "desc",
    };
  }, [sort]);

  const loadTracks = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetchTracksApi({
        page: pagination.page,
        limit: pagination.limit,
        search,
        status: statusFilter,
        sortBy,
        sortOrder,
      });

      setTracks(res.tracks || []);
      setPagination((prev) => ({
        ...prev,
        ...res.pagination,
      }));
    } catch (err) {
      console.error("Error loading tracks", err);
      setError(
        err?.response?.data?.msg || "Failed to load tracks. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTracks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.page, statusFilter, sort]); // search handled by debounced button / onChange

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPagination((prev) => ({ ...prev, page: 1 }));
    loadTracks();
  };

  const handlePageChange = (newPage) => {
    if (
      newPage >= 1 &&
      newPage <= pagination.totalPages &&
      newPage !== pagination.page
    ) {
      setPagination((prev) => ({ ...prev, page: newPage }));
    }
  };

  const handleEditSuccess = () => {
    setEditTrack(null);
    setShowUploadModal(false);
    loadTracks();
  };

  const handleCreateSuccess = () => {
    setShowUploadModal(false);
    setPagination((prev) => ({ ...prev, page: 1 }));
    loadTracks();
  };

  const formatDate = (iso) => {
    if (!iso) return "-";
    const d = new Date(iso);
    return d.toLocaleDateString();
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold">Release Music</h2>
          <p className="text-sm text-gray-500">
            View and manage all tracks you&apos;ve uploaded.
          </p>
        </div>
        <button
          onClick={() => {
            setEditTrack(null);
            setShowUploadModal(true);
          }}
          className="inline-flex items-center px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-medium"
        >
          + Upload New Track
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
        <form
          onSubmit={handleSearchSubmit}
          className="flex-1 flex items-center gap-2"
        >
          <div className="relative flex-1">
            <span className="absolute left-3 top-2.5 text-gray-400">
              <Search size={16} />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, artist, or Track ID"
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
          >
            Search
          </button>
        </form>

        <div className="flex gap-2">
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPagination((prev) => ({ ...prev, page: 1 }));
            }}
            className="px-2 py-2 rounded-lg border border-gray-200 text-sm"
          >
            {statusOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-2 py-2 rounded-lg border border-gray-200 text-sm"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-medium text-gray-500">Track ID</th>
              <th className="px-4 py-3 font-medium text-gray-500">Title</th>
              <th className="px-4 py-3 font-medium text-gray-500">
                Song Name
              </th>
              <th className="px-4 py-3 font-medium text-gray-500">Poster</th>
              <th className="px-4 py-3 font-medium text-gray-500">
                Created Date
              </th>
              <th className="px-4 py-3 font-medium text-gray-500">Status</th>
              <th className="px-4 py-3 font-medium text-gray-500 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-gray-500"
                >
                  Loading tracks...
                </td>
              </tr>
            )}

            {!loading && error && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-red-500 text-sm"
                >
                  {error}
                </td>
              </tr>
            )}

            {!loading && !error && tracks.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-gray-500 text-sm"
                >
                  No tracks found. Upload your first track to see it here.
                </td>
              </tr>
            )}

            {!loading &&
              !error &&
              tracks.map((track) => (
                <tr key={track._id} className="border-t border-gray-100">
                  <td className="px-4 py-3 text-xs font-mono text-gray-600">
                    {track.publicId || "-"}
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    {track.label || "-"}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {track.title || "-"}
                  </td>
                  <td className="px-4 py-3">
                    {track.coverArtUrl ? (
                      <img
                        src={track.coverArtUrl}
                        alt={track.title}
                        className="w-10 h-10 rounded-md object-cover border border-gray-200"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-md bg-gray-100 border border-dashed border-gray-300" />
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {formatDate(track.createdAt)}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        track.status === "live"
                          ? "bg-green-50 text-green-700"
                          : track.status === "pending"
                          ? "bg-yellow-50 text-yellow-700"
                          : track.status === "reject" ||
                            track.status === "suspend"
                          ? "bg-red-50 text-red-700"
                          : "bg-gray-50 text-gray-700"
                      }`}
                    >
                      {track.status
                        ? track.status.charAt(0).toUpperCase() +
                          track.status.slice(1)
                        : "Pending"}
                    </span>
                    {track.statusDescription && (
                      <div className="text-[11px] text-gray-500 mt-0.5">
                        {track.statusDescription}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="inline-flex items-center gap-2">
                      <button
                        onClick={() => setViewTrack(track)}
                        className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50"
                        title="View details"
                      >
                        <Eye size={16} className="text-gray-600" />
                      </button>
                      <button
                        onClick={() => {
                          setEditTrack(track);
                          setShowUploadModal(true);
                        }}
                        className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50"
                        title="Edit details"
                      >
                        <Edit2 size={16} className="text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>
            Page {pagination.page} of {pagination.totalPages} ·{" "}
            {pagination.totalItems} track(s)
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(pagination.page - 1)}
              disabled={pagination.page <= 1}
              className="px-3 py-1.5 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(pagination.page + 1)}
              disabled={pagination.page >= pagination.totalPages}
              className="px-3 py-1.5 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Upload / Edit Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto p-6">
            <UploadTrack
              mode={editTrack ? "edit" : "create"}
              initialTrack={editTrack}
              onClose={() => {
                setShowUploadModal(false);
                setEditTrack(null);
              }}
              onSuccess={editTrack ? handleEditSuccess : handleCreateSuccess}
            />
          </div>
        </div>
      )}

      {/* View Details Modal */}
      {viewTrack && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full max-h-[90vh] overflow-auto p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  {viewTrack.title || "Track details"}
                </h3>
                <p className="text-xs text-gray-500">
                  Track ID: {viewTrack.publicId}
                </p>
              </div>
              <button
                onClick={() => setViewTrack(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {viewTrack.coverArtUrl && (
              <img
                src={viewTrack.coverArtUrl}
                alt={viewTrack.title}
                className="w-full max-h-64 object-cover rounded-xl border border-gray-100"
              />
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-gray-500">Song Name</div>
                <div className="font-medium">{viewTrack.title || "-"}</div>
              </div>
              <div>
                <div className="text-gray-500">Label</div>
                <div className="font-medium">{viewTrack.label || "-"}</div>
              </div>
              <div>
                <div className="text-gray-500">Primary Artist</div>
                <div className="font-medium">
                  {viewTrack.primaryArtist || "-"}
                </div>
              </div>
              <div>
                <div className="text-gray-500">Featuring</div>
                <div className="font-medium">
                  {viewTrack.featuring || "-"}
                </div>
              </div>
              <div>
                <div className="text-gray-500">Lyricist</div>
                <div className="font-medium">
                  {viewTrack.lyricist || "-"}
                </div>
              </div>
              <div>
                <div className="text-gray-500">Composer</div>
                <div className="font-medium">
                  {viewTrack.composer || "-"}
                </div>
              </div>
              <div>
                <div className="text-gray-500">Genre</div>
                <div className="font-medium">{viewTrack.genre || "-"}</div>
              </div>
              <div>
                <div className="text-gray-500">Lyrics Language</div>
                <div className="font-medium">
                  {viewTrack.lyricsLanguage || "-"}
                </div>
              </div>
              <div>
                <div className="text-gray-500">P Line</div>
                <div className="font-medium">{viewTrack.pLine || "-"}</div>
              </div>
              <div>
                <div className="text-gray-500">C Line</div>
                <div className="font-medium">{viewTrack.cLine || "-"}</div>
              </div>
              <div>
                <div className="text-gray-500">Title Language</div>
                <div className="font-medium">
                  {viewTrack.titleLanguage || "-"}
                </div>
              </div>
              <div>
                <div className="text-gray-500">Production Year</div>
                <div className="font-medium">
                  {viewTrack.productionYear || "-"}
                </div>
              </div>
              <div>
                <div className="text-gray-500">Release Date</div>
                <div className="font-medium">
                  {formatDate(viewTrack.releaseDate)}
                </div>
              </div>
              <div>
                <div className="text-gray-500">Status</div>
                <div className="font-medium">
                  {viewTrack.status || "pending"}
                </div>
                {viewTrack.statusDescription && (
                  <div className="text-xs text-gray-500 mt-0.5">
                    {viewTrack.statusDescription}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReleaseMusic;