import logo from '../../assets/logo.png';

export function Header() {
  return (
    <header className='bg-primary py-7 px-20'>
      <img src={logo} alt="Shopper.com.br" />
    </header>
  );
}
