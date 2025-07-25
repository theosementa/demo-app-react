import { useQuery } from "@tanstack/react-query"
import { Link } from "@tanstack/react-router"
import axios from "axios"

export const About = () => {

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['randomDog'],
    queryFn: async () => {
      const res = await axios.get('https://dog.ceo/api/breeds/image/random')
      return res.data.message as string
    },
  })

  if (isLoading) return <p>Chargement…</p>
  if (error) return <p>Erreur lors du chargement de l’image</p>

  return <>
    <div className="flex flex-col items-center gap-4">
      <img src={data} alt="Chien aléatoire" className="max-w-sm rounded-lg shadow" />
      <button
        onClick={() => refetch()}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
      >
        Nouvelle image
      </button>

      <Link to="/">
        Back home
      </Link>
    </div>
  </>
}