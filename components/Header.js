import Image from 'next/image';
import HeaderIcon from './HeaderIcon';
import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid';

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-between p-6 text-gray-200 bg-gray-700 select-none sm:flex-row">
      <div className="flex ">
        <HeaderIcon Icon={HomeIcon} title="HOME" />
        <HeaderIcon Icon={UserIcon} title="ACCOUNT" />
        <HeaderIcon Icon={PhoneIcon} title="CONTACT" />
        <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />
      </div>
      <Image
        className="cursor-pointer active:brightness-110"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
        width={140}
        height={90}
        alt="imdb"
      />
    </div>
  );
}
