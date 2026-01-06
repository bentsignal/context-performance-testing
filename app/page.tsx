import VanillaContextPage from "./vanilla-context";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold">Vanilla Context is slow</h1>
      <p className="text-lg text-gray-500">
        This is a simple example of how vanilla context can be slow.
        Incrementing 1 causes a slow computation to re run in count 2, even
        though count 2 hasn&apos;t changed. Even with the react compiler
        enabled, the slow computation is still re run.
      </p>
      <VanillaContextPage />
    </div>
  );
}
