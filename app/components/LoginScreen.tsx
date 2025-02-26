import { Button, Modal, TitleBar, List } from "@react95/core";
import { Computer, Keys, msrating105Data, Msrating105 } from "@react95/icons";
import { useState } from "react";

export function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [showModal, toggleShowModal] = useState(true);
  // const handleOpenModal = () => toggleShowModal(true);
  const handleCloseModal = () => toggleShowModal(false);
  // const handleButtonClick = (e: React.MouseEvent<HTMLLIElement>) =>
  //   alert(e.currentTarget.value);
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#008080]">
      <Modal
        icon={<Computer variant="16x16_4" />}
        title="Welcome to Windows"
        dragOptions={{
          defaultPosition: {
            x: 0,
            y: 20,
          },
        }}
        titleBarOptions={[
          <TitleBar.Help
            key="help"
            onClick={() => {
              alert("Help!");
            }}
          />,
          <TitleBar.Close key="close" onClick={handleCloseModal} />,
        ]}
      >
        <div className="mb-4 flex flex-col items-center mr-6 ml-6 justify-between text-xl">
          <div className="flex flex-row items-center justify-between">
            <Msrating105 variant="32x32_4" className="mr-6 h-14 w-14" />
            <div>
              <div className="mt-4">
                <span className="m-6 p-6 text-xl">
                  Type a user name and password to log on to Windows
                </span>
              </div>
              <div className="flex flex-col">
                <label
                  className="mb-1 block text-sm font-bold"
                  htmlFor="username"
                >
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full rounded border bg-gray-300 px-3 py-2"
                  value="Administrator"
                  disabled
                />
              </div>
              <label
                className="mb-1 block text-sm font-bold"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full rounded border bg-gray-300 px-3 py-2"
                value="********"
                disabled
              />
            </div>
            <div className="flex flex-col gap-3 ml-5">
              <Button
                // className="w-full bg-[#0000a0] text-white hover:bg-[#000080]"
                onClick={onLogin}
              >
                <span className="text-xl">Login</span>
              </Button>
              <Button
                // className="w-full bg-[#0000a0] text-white hover:bg-[#000080]"
                onClick={handleCloseModal}
              >
                <span className="text-xl">Cancel</span>
              </Button>
            </div>
          </div>
          <div className="mb-4"></div>
        </div>
      </Modal>
      {/* <div className="w-96 rounded-md bg-[#c0c0c0] p-4 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold">Windows 95</h1>
        <div className="mb-4">
          <label className="mb-1 block text-sm font-bold" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="w-full rounded border bg-gray-300 px-3 py-2"
            value="Administrator"
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="mb-1 block text-sm font-bold" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded border bg-gray-300 px-3 py-2"
            value="********"
            disabled
          />
        </div>
        <Button
          // className="w-full bg-[#0000a0] text-white hover:bg-[#000080]"
          onClick={onLogin}
        >
          Login
        </Button>
      </div> */}
    </div>
  );
}
