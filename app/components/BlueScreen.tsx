export default function BlueScreen() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-blue-600 p-8 text-white">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">:(</h1>
        <p className="mb-4 text-xl">
          Your PC ran into a problem and needs to restart.
        </p>
        <p className="mb-4">
          We're just collecting some error info, and then we'll restart for you.
        </p>
        <p className="mb-8">0% complete</p>
        <p className="text-sm">
          For more information about this issue and possible fixes, visit
          https://www.windows.com/stopcode
        </p>
        <p className="mt-4 text-sm">
          If you call a support person, give them this info: Stop code:
          CRITICAL_PROCESS_DIED
        </p>
        <p className="mt-8 text-lg font-bold">
          Your computer broke and also we will spy on you with AI.
        </p>
      </div>
    </div>
  );
}
