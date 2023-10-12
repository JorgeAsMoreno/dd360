export const formatTime = (time: number) => {
  const minutos = Math.floor(time / 60);
  const segundos = time % 60;

  const formatoMinutos = minutos < 10 ? `0${minutos}` : minutos;
  const formatoSegundos = segundos < 10 ? `0${segundos}` : segundos;

  return `${formatoMinutos}:${formatoSegundos}`;
}
