
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        //arreglo países
        ArrayList<String> listaPaises = new ArrayList<>();
        listaPaises.add("Zephoria");
        listaPaises.add("Quintara");
        listaPaises.add("Xanthara");
        listaPaises.add("Venethrax");
        listaPaises.add("Cygnaria");
        listaPaises.add("Andromedus");
        listaPaises.add("Nebulon");
        listaPaises.add("Orionis");
        listaPaises.add("Pulsaria");
        listaPaises.add("Galaxion");
        System.out.println(listaPaises);

        // arreglo cantidad de habitantes
        ArrayList<Integer> listaHabitantes = new ArrayList<>();
        listaHabitantes.add(2564);
        listaHabitantes.add(4872);
        listaHabitantes.add(3501);
        listaHabitantes.add(1463);
        listaHabitantes.add(4123);
        listaHabitantes.add(1987);
        listaHabitantes.add(3792);
        listaHabitantes.add(2335);
        listaHabitantes.add(4268);
        listaHabitantes.add(1704);
        System.out.println(listaHabitantes);

        // arreglo cantidad de oro
        ArrayList<Integer> listaOro = new ArrayList<>();
        listaOro.add(2459);
        listaOro.add(780);
        listaOro.add(2101);
        listaOro.add(912);
        listaOro.add(2677);
        listaOro.add(654);
        listaOro.add(2310);
        listaOro.add(789);
        listaOro.add(2801);
        listaOro.add(613);
        System.out.println(listaOro);

        // arreglo cantidad de plata
        ArrayList<Integer> listaPlata = new ArrayList<>();
        listaPlata.add(2276);
        listaPlata.add(654);
        listaPlata.add(1985);
        listaPlata.add(876);
        listaPlata.add(2539);
        listaPlata.add(589);
        listaPlata.add(2178);
        listaPlata.add(702);
        listaPlata.add(2659);
        listaPlata.add(546);
        System.out.println(listaPlata);

        // arreglo cantidad de  Recursos naturales(en toneladas)
        ArrayList<Integer> listaRecursos = new ArrayList<>();
        listaRecursos.add(679);
        listaRecursos.add(2987);
        listaRecursos.add(934);
        listaRecursos.add(2773);
        listaRecursos.add(842);
        listaRecursos.add(2819);
        listaRecursos.add(1023);
        listaRecursos.add(2999);
        listaRecursos.add(765);
        listaRecursos.add(2864);
        System.out.println(listaRecursos);

        // Llamar a la función para imprimir la información de los países
        imprimirInformacionPais(listaPaises, listaHabitantes, listaOro, listaPlata, listaRecursos);
    }

    // Función para imprimir la información de los países
    public static void imprimirInformacionPais(ArrayList<String> listaPaises, ArrayList<Integer> listaHabitantes, ArrayList<Integer> listaOro, ArrayList<Integer> listaPlata, ArrayList<Integer> listaRecursos) {
        for (int i = 0; i < listaPaises.size(); i++) {
            System.out.println("País: " + listaPaises.get(i) + ",");
            System.out.println("Habitantes: " + listaHabitantes.get(i) + ",");
            System.out.println("Oro: " + listaOro.get(i) + ",");
            System.out.println("Plata: " + listaPlata.get(i) + ",");
            System.out.println("Recursos: " + listaRecursos.get(i) + ".");
        }
    }
}
