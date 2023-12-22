import { Toaster } from "react-hot-toast"

const Alert = () => {
    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
                duration: 2000,

                success: {
                    style: {
                        background: '#17C964',
                        color: '#fff'
                    },
                },
                error: {
                    style: {
                        background: '#F31260',
                        color: '#fff'
                    }
                }
            }}
        />
    )
}

export default Alert;