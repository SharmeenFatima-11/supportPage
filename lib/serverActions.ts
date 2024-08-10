"use server"
import nodemailer from "nodemailer"

interface iData {
    name: string
    email: string
    message: string
}

export const sendEmailFromContact = async (data: iData) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "awaishaqtalks@gmail.com",
            pass: "tlke vwzo zsyv ayhb"
        }
    })

    const options = {
        from: "awaishaqtalks@gmail.com",
        to: "fleacttech@gmail.com",
        subject: "Contact Form",
        text: `Name: ${data.name} \n Email: ${data.email} \n
        ${data.message}`
    }

    const options2 = {
        from: "awaishaqtalks@gmail.com",
        to: "awaishaq90@gmail.com",
        subject: "Contact Form",
        text: `Name: ${data.name} \n Email: ${data.email} \n
        ${data.message}`
    }

    try {
        const mailresp = await transporter.sendMail(options);
        const mailresp2 = await transporter.sendMail(options2);
        return {
            success: true,
            resp: mailresp,
            resp2: mailresp2
        }
    } catch (error) {
        return {
            success: false,
            messgage: "Error sending email"
        }
    }

} 