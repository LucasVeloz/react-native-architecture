import { AxiosResponse } from "axios"

const handler = async (request: () => Promise<AxiosResponse>) => {
  try {
    const { data } = await request();
    return {
      success: true,
      data,
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}

export default handler;

