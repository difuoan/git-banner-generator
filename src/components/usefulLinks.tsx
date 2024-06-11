const UsefulLinks = () => {
  return (
    <>
      <span className="text-4xl font-extrabold block mb-4">Useful Links</span>
      <ul className="max-w-md space-y-1 list-disc list-inside text-left margin-auto inline-block">
        <li className="hover:underline">
          <a href="https://www.compart.com/en/unicode/" target="_blank">
            Compart: unicode characters
          </a>
        </li>
        <li className="hover:underline">
          <a href="https://www.cadhatch.com/seamless-textures" target="_blank">
            CADhatch: royalty free seamless textures
          </a>
        </li>
        <li className="hover:underline">
          <a href="https://patterninja.com/" target="_blank">
            Pattern Ninja: pattern generator
          </a>
        </li>
      </ul>
    </>
  );
};

export default UsefulLinks;
