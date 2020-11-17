import { toast } from 'react-toastify'

interface AppError {
  response: {
    data: {
      message: string
    }
  }
}

export const handleApiError = (error: AppError | any) => {
  let message
  if (error.response.data && error.response.data.message) {
    message = error.response.data.message
  } else {
    message = 'There was an error during request. Try again later'
  }

  toast.error(message)
}
