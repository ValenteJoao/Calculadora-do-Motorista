import React from 'react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export function ScreenTerms() {

  return (
    <LinearGradient colors={['#7EF29D', '#0F68A9']}
      style={styles.container}>

      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require('../../../assets/img/logobg.png')} />
      </View>

      <ScrollView style={styles.containerTermsAndConditions}>
        <Text style={styles.Text}>{`
          Termos e Condições - Aplicativo Calculadora do Motorista

          Bem-vindo(a) ao nosso aplicativo de controle financeiro para motoristas de aplicativos "Calculadora do Motorista"! Antes de começar a utilizar nossos serviços, pedimos que você leia atentamente os seguintes termos e condições. Ao baixar, instalar ou utilizar o nosso aplicativo, você concorda em cumprir com estes termos e condições. Caso não concorde com algum deles, pedimos que não prossiga com o uso do aplicativo.

          Uso do Aplicativo

          1.1 O aplicativo destina-se exclusivamente a motoristas de aplicativos que desejam controlar suas finanças pessoais e profissionais. O objetivo principal do aplicativo é fornecer ferramentas para ajudar na gestão financeira, como registro de receitas, despesas, quilometragem e outras informações relevantes.
          
          1.2 Ao utilizar o aplicativo, você concorda em fornecer informações precisas, completas e atualizadas no momento do cadastro. Você é responsável por manter a confidencialidade das informações de sua conta e por todas as atividades que ocorrerem em sua conta.

          1.3 O aplicativo é fornecido "no estado em que se encontra" e não garantimos sua disponibilidade contínua, livre de erros ou segurança completa. Poderemos fazer atualizações, modificações ou interrupções temporárias do serviço para aprimorar o aplicativo.

          Proteção de Dados

          2.1 A privacidade e a proteção de seus dados são de extrema importância para nós. Comprometemo-nos a cumprir todas as leis e regulamentos aplicáveis ​​à proteção de dados, incluindo, mas não se limitando à Lei Geral de Proteção de Dados (LGPD).
          
          2.2 Ao se cadastrar no aplicativo, coletaremos algumas informações pessoais, como nome, endereço de e-mail e outras informações relacionadas à sua atividade como motorista de aplicativos. Esses dados serão utilizados apenas para fins de autenticação, personalização da experiência do usuário e para fornecer os serviços do aplicativo.

          2.3 Não compartilharemos, venderemos ou alugaremos seus dados pessoais a terceiros sem o seu consentimento explícito, exceto quando exigido por lei ou para fornecer os serviços contratados.

          2.4 Tomaremos todas as medidas razoavelmente necessárias para proteger seus dados pessoais contra acesso não autorizado, uso indevido ou divulgação não autorizada. No entanto, não podemos garantir a segurança absoluta dos dados transmitidos pela internet.

          2.5 Ao utilizar o aplicativo, você reconhece e concorda que podemos coletar informações anônimas e agregadas sobre o uso do aplicativo para fins de análise estatística e melhoria dos nossos serviços.

          Propriedade Intelectual

          3.1 Todos os direitos de propriedade intelectual relacionados ao aplicativo, incluindo, mas não se limitando a marcas registradas, direitos autorais, segredos comerciais e patentes, são de nossa propriedade exclusiva.
          
          3.2 Você concorda em não reproduzir, modificar, distribuir, vender, sublicenciar ou explorar qualquer parte do aplicativo sem a nossa autorização prévia por escrito.

          Limitação de Responsabilidade

          4.1 O uso do aplicativo é de sua responsabilidade exclusiva. Não nos responsabilizamos por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso do aplicativo, incluindo, mas não se limitando a perda de lucros, interrupção de negócios, danos ao dispositivo ou perda de dados.
          
          4.2 Fornecemos o aplicativo "como está", sem quaisquer garantias expressas ou implícitas de qualquer tipo, incluindo, mas não se limitando a garantias de comercialização, adequação a uma finalidade específica e não violação.

          Modificações nos Termos e Condições

          5.1 Reservamos o direito de modificar estes termos e condições a qualquer momento, por isso, recomendamos que você verifique regularmente esta página para se manter atualizado(a) sobre quaisquer alterações.
          
          5.2 Se você continuar utilizando o aplicativo após a publicação das alterações nos termos e condições, consideraremos que você aceitou as modificações.

          Lei Aplicável

          Estes termos e condições serão regidos e interpretados de acordo com as leis do Brasil. Em caso de qualquer litígio decorrente deste contrato, as partes concordam em se submeter à jurisdição exclusiva dos tribunais brasileiros.
          Se você tiver alguma dúvida ou preocupação sobre estes termos e condições, entre em contato conosco por meio das informações fornecidas no aplicativo.

          Última atualização: 30 de maio de 2023.`}
        </Text>
      </ScrollView>

    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B9FA4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    margin: 20
  },
  logo: {
    width: 80,
    height: 79,
  },

  containerTermsAndConditions: {
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'white',
  },
  Text: {
    color: 'black',
    overflow: 'scroll',
    marginBottom: 20
  },
});