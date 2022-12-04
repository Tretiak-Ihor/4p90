import { getConfigVariables } from '../../shared/helpers'

const fetchAppConfig = (req, res) => {
  try {
    res.json({
      device: req.headers['x-0-device'] ?? 'unknown',
      env: { ...getConfigVariables() },
    })
  } catch (error) {
    res.status(500).json({
      error: {
        cause: error.message,
        message: "Something isn't quite right",
      },
    })
  }
}

export default fetchAppConfig
