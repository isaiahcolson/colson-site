import { useRive } from '@rive-app/react-canvas';

function RiveTest() {
  const { RiveComponent } = useRive({
    autoplay: true,
    src: 'rds-loading.riv',
    stateMachines: "State Machine 1",
  });

  return (
    <div>
      <p>testing rive</p>

      <RiveComponent className='h-16 w-16' />
    </div>
  );
}

export { RiveTest };
