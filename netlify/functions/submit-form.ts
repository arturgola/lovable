import { Handler } from '@netlify/functions'

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    }
  }

  try {
    const formData = event.body
    // Here you can add any additional processing or validation

    // Send email notification
    const response = await fetch('https://api.netlify.com/build_hooks/your-build-hook-id', {
      method: 'POST',
      body: JSON.stringify({
        formData,
        to: 'askordoors@gmail.com',
        from: 'askordoors.ee',
        subject: 'New Contact Form Submission',
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
      })
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to submit form' })
    }
  }
}

export { handler } 