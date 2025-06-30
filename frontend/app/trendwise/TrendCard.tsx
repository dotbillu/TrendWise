'use client';

import TrendActions from './TrendActions';

interface TrendCardProps {
  trend: {
    id: number;
    title: string;
    url: string;
    description: string;
    category: string;
    trend: string;
    timeframe: string;
  };
}

export default function TrendCard({ trend }: TrendCardProps) {
  return (
    <div className="trend-item">
      <div className="trend-header">
        <span className="trend-category">{trend.category}</span>
        <div className="trend-stats">
          <span className="trend-change">{trend.trend}</span>
          <span className="trend-time">{trend.timeframe}</span>
        </div>
      </div>
      <h3 className="trend-title">{trend.title}</h3>
      <p className="trend-description">{trend.description}</p>
      <TrendActions
        sourceUrl={trend.url}
        trendTitle={trend.title}
      />
    </div>
  );
}