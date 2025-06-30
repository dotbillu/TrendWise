'use client';

interface TrendActionsProps {
  sourceUrl?: string;
  trendTitle: string;
}

export default function TrendActions({ sourceUrl, trendTitle }: TrendActionsProps) {
  const handleGenerateArticle = () => {
    console.log('Generate article for:', trendTitle);
    // Add your article generation logic here
    // You could make an API call to your backend
    alert(`Generating article for: ${trendTitle}`);
  };

  const handleViewDetails = () => {
    console.log('View details for:', trendTitle);
    // Add your view details logic here
    alert(`Viewing details for: ${trendTitle}`);
  };

  return (
    <div className="trend-actions">
      <button className="btn-primary" onClick={handleGenerateArticle}>
        <i className="fas fa-robot"></i>
        Generate Article
      </button>
      {sourceUrl && sourceUrl !== "#" ? (
        <a 
          href={sourceUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <i className="fas fa-external-link-alt"></i>
          View Source
        </a>
      ) : (
        <button className="btn-secondary" onClick={handleViewDetails}>
          <i className="fas fa-external-link-alt"></i>
          View Details
        </button>
      )}
    </div>
  );
}