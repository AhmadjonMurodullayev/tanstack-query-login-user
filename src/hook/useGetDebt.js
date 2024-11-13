import { useQuery } from "@tanstack/react-query"
import { request } from "../config/request"

export const useGetDebt = (params = {}) => {
  return (
useQuery({
    queryKey:["qarz",params.id],
    queryFn:()=> request.get("/qarz",{
      params: {...params}
    }).then((res) => res.data),
})
  )
}
