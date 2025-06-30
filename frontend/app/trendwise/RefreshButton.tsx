'use client';

export default function RefreshButton() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <button className="refresh-button" onClick={handleRefresh}>
      <i className="fas fa-refresh"></i>
      Refresh Page
    </button>
  );
}