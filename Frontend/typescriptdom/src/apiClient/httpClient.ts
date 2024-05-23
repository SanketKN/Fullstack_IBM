// this file will help to get the data 

import IProduct from "../model/product";

// <..> denotes generics
// class is creaed so that the get put post method can be used easily
class httpClient{
    async get(url:string) : Promise<IProduct[]>{
        const result = await fetch(url)
        const data = await result.json()
        return<IProduct[]> data

    }
    async getById(url: string,id: number):Promise<IProduct>{

        const response = await fetch(`${url}/${id}`)
        const data = await response.json()
        return <IProduct>data
      }
    async put(url: string,data:any):Promise<IProduct>{
  
        const response = await fetch(`${url}/${data.productId}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(data)
        })
        return await response.json()
        
      }
}

export default new httpClient()
