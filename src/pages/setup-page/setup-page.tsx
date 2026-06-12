import { Particles } from "#components/ui/particles";
import { Progress } from "#components/ui/progress";

const SetupPage = () => {
  return (
    <div className="bg-background relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <span className="pointer-events-none z-10 text-center text-5xl leading-none font-semibold whitespace-pre-wrap">
        Nous préparons votre cerveau dès maintenant.
      </span>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      <div className=" w-1/2 fixed bottom-0 mb-5 flex justify-center item-center flex-row gap-4">
        <Progress value={40} /> <p> 40% </p>
      </div>
    </div>
  )
}

export default SetupPage;