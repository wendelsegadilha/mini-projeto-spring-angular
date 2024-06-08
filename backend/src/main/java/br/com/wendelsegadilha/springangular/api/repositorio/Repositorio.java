package br.com.wendelsegadilha.springangular.api.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.wendelsegadilha.springangular.api.modelo.Cliente;

@Repository
public interface Repositorio extends JpaRepository<Cliente, Long>{
    
}
