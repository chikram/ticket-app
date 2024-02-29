import Ticket from "@/app/Models/Ticket";
import { NextResponse } from "next/server";

//edit ticket
export async function GET(req, { params }) {
    try {
        const { id } = params;
        const foundTicket = await Ticket.findOne({ _id: id });
        return NextResponse.json({ foundTicket }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }

}


//delete a ticket
export async function DELETE(req, { params }) {
    try {
        const { id } = params;
        await Ticket.findByIdAndDelete(id)
        return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }

}

//update
export async function PUT(req, { params }) {
    try {
        const { id } = params;
        const body = await req.json()
        const ticketData = body.formData

        const updateTicketData = await Ticket.findByIdAndUpdate(id, {
            ...ticketData
        })
        return NextResponse.json({ message: "Ticket updated" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }

}