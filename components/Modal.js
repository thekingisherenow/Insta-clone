import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Modal() {
    const [open, setOpen] = useRecoilState(modalState)

    function closeModel(){
        setOpen(false)
    } 
    function openModel(){
        setOpen(true)
    }

    return (
        <Transition show={open} as={Fragment}>
            <Dialog as='div'
                className='fixed z-10 inset-0 overflow-y-auto'
                onClose={openModel}>

                <div className="flex min-h-screen -mt-36  items-center justify-center text-center">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <span >

                <Dialog.Panel className="w-full max-w-md transform overflow-hidden 
                rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                    >
                   Add a picture
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We've sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModel}
                      >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
                      </span>
              </Transition.Child>
                </div>


            </Dialog>
        </Transition>



    );

}

export default Modal;