import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
      also
    </ChildAsFC>
  );
};

export default Parent;
