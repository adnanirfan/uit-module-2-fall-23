import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

type Props = {};

export default function UserLogin({}: Props) {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string>("");

  // register user email
  const resgisterUserEmail = async (userEmail: string) => {
    try {
      const response = await fetch("http://localhost:8000/newUser", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail }),
      });
      const data = await response.json();
      toast.success(data.message);
      return data;
    } catch (error) {
      console.log("🚀  resgisterUserEmail  error:", error);
    }
  };

  const handleSubmitEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userEmail) {
      const userReg = await resgisterUserEmail(userEmail);
      navigate(`/userinput?userID=${userReg.data._id}`);
    }
    setUserEmail("");
  };

  return (
    <form
      onSubmit={handleSubmitEmail}
      className="flex h-40 items-center justify-center"
    >
      <label
        className="flex items-center border-2  border-black "
        htmlFor="userEmail"
      >
        <input
          placeholder="Enter your Email"
          className="border-none p-2 focus:outline-none"
          type="email"
          value={userEmail}
          required={true}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setUserEmail(event.target.value)
          }
        />
        <span className="p-1">
          <Mail />
        </span>
      </label>
      <button className="btn_Style" type="submit">
        Login
      </button>
    </form>
  );
}
