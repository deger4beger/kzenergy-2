export const errorHandler = (e: any, customError: string = "Some error occured") => {
	if (typeof e.response.data.detail === "string") {
   return e.response.data.detail
  } else {
    return customError
  }
}