import { Ellipsis, InboxIcon, Megaphone, Menu } from 'lucide-react'
import React from 'react'

const Inbox = () => {
    return (
        <>
            <div className='w-[350px] bg-amber-600 ml-[20px] mt-[100px] h-[400px] rounded-lg shadow-md '>
                <div id='inboxtitle' className='flex justify-between bg-blue-900 pl-[15px] pr-[15px] pt-[10px] pb-[10px] rounded-t-lg  '>
                    <div className='flex gap-[5px]'><InboxIcon /> <h3 className='text-white'> Inbox</h3></div>
                    <div title='icon_hide' className='flex gap-[20px]'>
                        <Megaphone />
                        <Ellipsis />
                        <Menu />
                    </div>
                </div>




















                <div></div>
            </div>

        </>
    )
}

export default Inbox
