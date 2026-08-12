/** Data de ingresso no Corpo de Bombeiros Militar de Minas Gerais. */
export const INICIO_BOMBEIROS = '2017-03-30'

/**
 * Anos completos entre uma data ISO e hoje. Usado para que o tempo de serviço no
 * texto do portfólio se atualize sozinho, sem precisar editar nada a cada ano.
 */
export function anosCompletosDesde(inicioIso: string, referencia = new Date()): number {
  const inicio = new Date(`${inicioIso}T00:00:00`)
  let anos = referencia.getFullYear() - inicio.getFullYear()

  // Ainda não chegou o aniversário da data neste ano: desconta um.
  const mes = referencia.getMonth() - inicio.getMonth()
  if (mes < 0 || (mes === 0 && referencia.getDate() < inicio.getDate())) anos -= 1

  return Math.max(anos, 0)
}
