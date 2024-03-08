import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState(null)

    const httpConfig = (method, data) => {
        if (method === 'POST') {
            setConfig(
                [
                    url,
                    {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    }
                ]
            )
            setMethod(method)
        }
        else if (method === 'DELETE') {
            setConfig(
                [`${url}/${data}`,
                {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    }
                }]
            )
            setMethod(method)
        }
    }

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(url)
                const data = await res.json()
                setData(data)
            } catch (error) {
                setError(error.message)
            }

            setLoading(false)
        }

        fetchData()

    }, [url, callFetch])

    useEffect(() => {
        const postData = async () => {
            setLoading(true)
            if (method === 'POST') {
                const res = await fetch(...config)
                const json = await res.json()
                setCallFetch(json)
            }
            else if (method === 'DELETE') {
                console.log('DELETEE')
                console.log(config)
                const action = await fetch(...config)
                setCallFetch(action)
            }
            setLoading(false)
        }
        postData()
    }, [config, method, url])

    return { data, httpConfig, loading, error }
}