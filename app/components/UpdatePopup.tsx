import React from "react";
import { Modal, TitleBar, Button } from "@react95/core";
import { Computer, Progman37, ReaderClosed } from "@react95/icons";

interface Windows95UpgradePromptProps {
  onSkip: (e: any) => void;
  onAccept: () => void;
}

const Windows95UpgradePrompt = ({
  onSkip,
  onAccept,
}: Windows95UpgradePromptProps) => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#008080]">
      <Modal
        icon={<Computer variant="16x16_4" />}
        title="Windows Update"
        className="w-auto max-w-3xl"
        menu={[]}
        titleBarOptions={[
          <TitleBar.Help
            key="help"
            onClick={() => {
              alert("Help!");
            }}
          />,
          <TitleBar.Close key="close" onClick={onAccept} />,
        ]}
      >
        <div className="p-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left side - Icon */}
            <div className="flex justify-center items-start md:items-center">
              <Progman37 variant="32x32_4" className="h-32 w-32" />
            </div>

            {/* Right side - Content */}
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">
                  Now unlocked: You're eligible for a free upgrade to Windows 11
                </h2>
                <p className="mb-4">
                  Don't worry—you'll be able to use your PC while the download
                  runs in the background (it's about 4 GB)
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button onClick={onAccept} className="px-6 py-1">
                  Get it
                </Button>
                <Button className="px-6 py-1">Schedule it</Button>
              </div>

              {/* System Requirements Notice */}
              <div className="border border-gray-500 p-3 bg-gray-100 mb-4">
                <div className="flex items-start gap-2">
                  <ReaderClosed variant="16x16_4" />
                  <p className="text-sm">
                    <strong>Warning:</strong> This may require a new computer.
                    Windows 11 requires significantly more memory and processing
                    power than your current system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row buttons */}
          <div className="flex justify-between mt-4 pt-4 border-t border-gray-400">
            <div className="flex gap-4">
              <Button className="px-4">Learn more</Button>
              <Button onClick={onSkip} className="px-4">
                Keep Windows 95
              </Button>
            </div>
            <div className="flex gap-2">
              <Button className="px-1">
                <span role="img" aria-label="Settings">
                  ⚙️
                </span>
              </Button>
              <Button className="px-1">
                <span role="img" aria-label="Sound">
                  🔊
                </span>
              </Button>
              <Button className="px-4">See what's inside</Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Windows95UpgradePrompt;
