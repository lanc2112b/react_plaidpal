import { useEffect } from "react";

const SummaryModalMessage = ({ formSubmitMSG, setFormSubmitMSG }) => {

    useEffect(() => {
        
        const timeId = setTimeout(() => {

            setFormSubmitMSG(null)

        }, 12000)

        return () => {
            clearTimeout(timeId)

        }
    }, [formSubmitMSG, setFormSubmitMSG]);
    
   /*  useEffect(() => {

        //console.log(formSubmitMSG)

    }, [formSubmitMSG]) */
    
    return (
        <>
           <span className={formSubmitMSG?.stat === 'success' ? 'text-success' : 'text-danger'}><strong>{formSubmitMSG?.msg}</strong></span>
        </>
    )
    

}

export default SummaryModalMessage;