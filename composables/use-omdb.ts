export const useOMDB = () => {
  const search = async (
    title: string,
    type?: string,
    year?: string,
    page?: number,
  ) => {
    const params = {
      s: title,
      type,
      ...(year ? { y: year } : {}),
      ...(page ? { page } : {}),
    }
    const res: any = await $fetch('/api/query-omdb', { params })
    return res.Search
  }

  const getItem = async (id: string) => {
    return await $fetch('/api/query-omdb', { params: { i: id } })
  }

  return { search, getItem }
}
