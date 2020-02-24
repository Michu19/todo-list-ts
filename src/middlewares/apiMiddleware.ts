
export const apiMiddleware = async <T>(func: Function) => {
  try{
    return await func() as T;
  }
  catch(err){
    //TODO: snackBar 
  }
} 