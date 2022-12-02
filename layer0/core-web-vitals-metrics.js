import { Metrics } from '@layer0/rum'

if (typeof window !== 'undefined') {
  new Metrics({ token: 'db105f92-0e75-48ec-b701-30da587cd080' }).collect()
}
