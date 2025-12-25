export interface BrandSnapshot {
  id: string;
  name: string;
  logoUrl: string;
  lastAuditTimestamp?: string;
  metrics: {
    aiVisibilityScore: number;
    trustScore: number;
    nonBrandedCoverage: number;
  };
}

export type AuditStatus = 'pass' | 'fail' | 'warning' | 'info';

export interface AuditIssue {
  id: string;
  severity: 'critical' | 'major' | 'minor';
  title: string;
  description: string;
}

export interface AuditRecommendation {
  id: string;
  title: string;
  impact: 'high' | 'medium' | 'low';
  effort: 'high' | 'medium' | 'low';
  description: string;
}

export interface AuditModule {
  id: string;
  name: string;
  description: string;
  score: number;
  status: AuditStatus;
  insights: string[];
  issues: AuditIssue[];
  recommendations: AuditRecommendation[];
}

export type NodeType = 'input' | 'process' | 'output';

export interface ArchitectureNode {
  id: string;
  label: string;
  type: NodeType;
  description?: string;
  connections: string[]; // IDs of connected nodes
}
