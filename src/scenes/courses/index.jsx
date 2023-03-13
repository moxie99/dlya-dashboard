import Form from "components/Form"
import { useState } from "react"

const CreateCourse = () => {
  const [propertyImage, setPropertyImage] = useState({ name: "", url: "" })

  const handleImageChange = (file) => {
    const reader = (readFile) =>
      new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.onload = () => resolve(fileReader.result)
        fileReader.readAsDataURL(readFile)
      })

    reader(file).then((result) =>
      setPropertyImage({ name: file?.name, url: result })
    )
  }

  const onFinishHandler = async (data) => {
    if (!propertyImage.name) return alert("Please select an image")
  }

  return (
    <Form
      type="Create"
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      propertyImage={propertyImage}
    />
  )
}
export default CreateCourse
