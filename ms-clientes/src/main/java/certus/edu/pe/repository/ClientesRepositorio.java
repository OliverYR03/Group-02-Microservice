package certus.edu.pe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import certus.edu.pe.modelo.Clientes;

public interface ClientesRepositorio extends JpaRepository <Clientes, Integer> {

}
