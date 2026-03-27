import { createContext, useState, ReactNode } from "react";

export enum Progress {
  None = "",
  Cart = "cart",
  Checkout = "checkout",
}

type UserProgressContextType = {
  progress: Progress;
  showCart: () => void;
  hideCart: () => void;
  showCheckout: () => void;
  hideCheckout: () => void;
};

export const UserProgressContext = createContext<UserProgressContextType>({
  progress: Progress.None,
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export const UserProgressContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [userProgress, setUserProgress] = useState<Progress>(Progress.None);

  const showCart = () => {
    setUserProgress(Progress.Cart);
  };

  const hideCart = () => {
    setUserProgress(Progress.None);
  };

  const showCheckout = () => {
    setUserProgress(Progress.Checkout);
  };

  const hideCheckout = () => {
    setUserProgress(Progress.None);
  };

  const userProgressCtx: UserProgressContextType = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
};
