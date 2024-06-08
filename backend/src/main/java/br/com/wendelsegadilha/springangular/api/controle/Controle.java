package br.com.wendelsegadilha.springangular.api.controle;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.wendelsegadilha.springangular.api.modelo.Cliente;
import br.com.wendelsegadilha.springangular.api.repositorio.Repositorio;

@RestController
@CrossOrigin(origins = "*")
public class Controle {


    @Autowired
    private Repositorio repositorio;

    @PostMapping
    public Cliente cadastrar(@RequestBody Cliente cliente) {
        return repositorio.save(cliente);
    }

    @GetMapping
    public List<Cliente> listagem() {
        return repositorio.findAll();
    }

    @PutMapping
    public Cliente editar(@RequestBody Cliente cliente) {
        return repositorio.save(cliente);
    }

    @DeleteMapping("/{codigo}")
    public void remover(@PathVariable Long codigo) {
        repositorio.deleteById(codigo);
    }
    
}
