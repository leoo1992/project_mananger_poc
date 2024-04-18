import toast from 'react-hot-toast';
import { HiXCircle } from 'react-icons/hi';

export const notifyError = ({ text = 'Error' }: { text?: string }) => {
  toast.custom(
    (t) => (
      <div
        className={`shadow-2xl backdrop-blur-sm bg-base-300 text-sm text-error font-extrabold bg-opacity-50 p-4 mt-16 rounded-3xl flex align-center self-center justify-center content-center text-center items-center border border-error transition-transform duration-500 ease-in-out`}
        style={{
          transform: `translateY(${t.visible ? '0' : '-100%'})`,
        }}
      >
        <div className="text-3xl pr-4">
          <HiXCircle />
        </div>
        <div>
          <span>{text}</span>
        </div>
      </div>
    ),
    {
      duration: 3000,
      position: 'top-center',
    }
  );
};
