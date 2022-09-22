import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Modal() {
    const [open,setOpen] = useRecoilState(modalState)

    return (
        <Transition.Root show ={open} as = {Fragment}>
            <Dialog as = 'div'
            className='fixed z-10 inset-0 overflow-y-auto' ></Dialog>
        </Transition.Root>
        


        );

}

export default Modal;