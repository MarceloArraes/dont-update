import { Button } from "@/components/ui/button"

export default function LoginScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#008080]">
      <div className="w-96 rounded-md bg-[#c0c0c0] p-4 shadow-md">
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
        <Button className="w-full bg-[#0000a0] text-white hover:bg-[#000080]" onClick={onLogin}>
          Login
        </Button>
      </div>
    </div>
  )
}

