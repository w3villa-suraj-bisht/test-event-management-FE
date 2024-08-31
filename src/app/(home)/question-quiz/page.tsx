"use client";
import { score, userQuestion } from "@/utils/api/endPoints/userScore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import { toast } from "react-toastify";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const QuestionQuiz: React.FC = () => {
  const router = useRouter();
  const Ref = useRef<ReturnType<typeof setInterval> | null>(null);
  const [timer, setTimer] = useState("00:00:00");
  const [pageIndex, setPageIndex] = useState(0);
  const [answered, setAnswered] = useState<any>({});
  const [switchCount, setSwitchCount] = useState(0);
  const [questionId , setQuestion] = useState<any>(1);

  const data = {
    totalDuration: 5, // in minutes
    maxTabSwitchAttempts: 3,
    displayResultAfterSubmit: true,
    questions: [
      {
        id: 1,
        text: "What is the capital of France?",
        options: [
          { id: 1, text: "London" },
          { id: 2, text: "Berlin" },
          { id: 3, text: "Paris" },
          { id: 4, text: "Madrid" },
        ],
        marks: 5,
      },
      {
        id: 2,
        text: "Which planet is known as the Red Planet?",
        options: [
          { id: 1, text: "Venus" },
          { id: 2, text: "Mars" },
          { id: 3, text: "Jupiter" },
          { id: 4, text: "Saturn" },
        ],
        marks: 5,
      },
      {
        id: 3,
        text: "What is the largest mammal in the world?",
        options: [
          { id: 1, text: "African Elephant" },
          { id: 2, text: "Blue Whale" },
          { id: 3, text: "Giraffe" },
          { id: 4, text: "Hippopotamus" },
        ],
        marks: 5,
      },
      {
        id: 4,
        text: "Who painted the Mona Lisa?",
        options: [
          { id: 1, text: "Vincent van Gogh" },
          { id: 2, text: "Pablo Picasso" },
          { id: 3, text: "Leonardo da Vinci" },
          { id: 4, text: "Michelangelo" },
        ],
        marks: 5,
      },
      {
        id: 5,
        text: "What is the chemical symbol for gold?",
        options: [
          { id: 1, text: "Ag" },
          { id: 2, text: "Au" },
          { id: 3, text: "Fe" },
          { id: 4, text: "Cu" },
        ],
        marks: 5,
      },
    ],
    totalMarks: 25,
    passingMarks: 15,
  };



  const getTimeRemaining = (e: Date) => {
    const total = Date.parse(e.toString()) - Date.parse(new Date().toString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e: Date) => {
    const { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        `${hours}:${minutes > 9 ? minutes : "0" + minutes}:${
          seconds > 9 ? seconds : "0" + seconds
        }`
      );
    }
  };

  const clearTimer = (e: Date) => {
    setTimer("00:00:00");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    const deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + data.totalDuration * 60);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
    return () => {
      if (Ref.current) clearInterval(Ref.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addAnswer = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    const latestAnswers = { ...answered, [name]: value };
    setAnswered(latestAnswers);
    window.localStorage.setItem("quiz", JSON.stringify(latestAnswers));
  };

  useEffect(() => {
    if (timer == "0:00:00") {
      handleSubmitQuiz();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer, router]);

  const handleSubmitQuiz = async() => {
    const formattedAnswers = Object.entries(answered).map(
      ([questionId, selectedOption]) => ({
        questionId: parseInt(questionId),
        selectedOptionId:
          data.questions
            .find((q:any) => q.text === selectedOption)
            ?.options.find((o:any) => o.text === selectedOption)?.id ?? 0,
      })
    );

    const payload = {
      answers: formattedAnswers,
      questionPaperId:"8788a28c-677b-11ef-90cb-027e2555139b"
    };

    const response = await score(payload);
    if(response.success){
      toast.success("Test submitted successfully.");
      router.push("/")
    }else{
      toast.success(response.message);
      toast.success("Test submitted successfully.");
      router.push("/")
    }
  
  };

  useEffect(() => {
    let lastFocusTime = Date.now();
    let isHidden = false;

    const checkAndIncrementSwitch = () => {
      const now = Date.now();
      if (now - lastFocusTime > 300) { 
        setSwitchCount((prevCount) => {
          const newCount = prevCount + 1;
          console.log(`Switch count: ${newCount}`); 
          if (newCount <= data.maxTabSwitchAttempts) {
            alert(`Warning: You have switched tabs/windows ${newCount} time(s). Maximum allowed: ${data.maxTabSwitchAttempts}`);
          }
          if (newCount >= data.maxTabSwitchAttempts) {
            handleSubmitQuiz();
            alert("You have switched tabs/windows too many times. The quiz has been submitted automatically.");
          }
          return newCount;
        });
      }
      lastFocusTime = now;
    };

    const handleVisibilityChange = () => {
      if (document.hidden && !isHidden) {
        isHidden = true;
        checkAndIncrementSwitch();
      } else if (!document.hidden && isHidden) {
        isHidden = false;
      }
    };

    const handleFocus = () => {
      if (!document.hidden && isHidden) {
        isHidden = false;
        checkAndIncrementSwitch();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.maxTabSwitchAttempts, handleSubmitQuiz]);



  const quiz = data.questions[pageIndex];
  const next = pageIndex < data.questions.length - 1;
  const prev = pageIndex > 0;
  const total = data.questions.length;

  return (
    <>
      <div className="wrapper">
        <div className="quiz">
          <div className="info">
            <div className="text-3xl"><b>{timer}</b></div>
            <div>
              {pageIndex + 1} of {total}
            </div>
          </div>
          <div className="as">
          <div>
            <div key={quiz.id}>
              <p className="text-2xl">{quiz.text}</p>
            </div>
            <br />
            <ul>
              {quiz.options.map((option:any) => (
                <li className="option" key={option.id}>
                  <input
                    type="radio"
                    name={quiz.id.toString()}
                    onChange={addAnswer}
                    value={option.text}
                    checked={answered[quiz.id] === option.text}
                  />
                  {option.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="navBtns">
            {prev ? (
              <button onClick={() => setPageIndex(pageIndex - 1)}>
                Previous Question
              </button>
            ) : (
              <Link href="/">Cancel</Link>
            )}
            {next ? (
              <button
                onClick={() => setPageIndex(pageIndex + 1)}
                className={
                  answered[quiz.id] === undefined ? "activeBtn" : "activeBtn"
                }
              >
                Next Question
              </button>
            ) : (
              data.questions.length-1 && (
                <div className="finish" onClick={() => handleSubmitQuiz()}>
                  Finish
                </div>
              )
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionQuiz;
