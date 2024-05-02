export const Icon = ({ name }:{name:string}) => {
  const iconUrl = `https://cdn.simpleicons.org/${name}${name === 'github' || name === 'express' ? '/white' : ''}`;

  return (
    <img
      src={iconUrl}
      alt={name}
      className="h-5 w-5"
    />
  );
};
