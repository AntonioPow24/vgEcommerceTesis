const PasswordCondition = ({ condition, label }) => {
    const getConditionClass = () => {
      if (condition === null) return 'text-gray-500';
      return condition ? 'text-success' : 'text-logOut';
    };
  
    return <li className={`${getConditionClass()} flex items-center gap-1`}> <i className={`fa-solid fa-circle text-[6px] pt-1 ${getConditionClass()}`}></i> {label}</li>;
  };
  
  export default PasswordCondition;