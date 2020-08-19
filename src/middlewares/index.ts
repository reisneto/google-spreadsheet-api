import { Express } from 'express';
import cors from 'cors';
import pino from 'express-pino-logger';
import Prometheus from 'prom-client';
import promMid from 'express-prometheus-middleware';

const prometheusMiddleware = promMid({
  metricsPath: '/metrics',
  collectDefaultMetrics: true,
  requestDurationBuckets: Prometheus.exponentialBuckets(0.1, 1.75, 8),
  prefix: 'google_spreasheet_api_',
});

export function applyMiddlewares(app: Express): void {
  app.use(cors());
  app.use(pino());
  app.use(prometheusMiddleware);
}
