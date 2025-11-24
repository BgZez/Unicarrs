package br.com.Unicarrs.services;

import br.com.Unicarrs.model.Estoque;
import br.com.Unicarrs.repository.EstoqueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstoqueServices {

    @Autowired
    private EstoqueRepository estoqueRepository;

    // metodo para listar Veiculos
    public List<Estoque> listarestoque() {
        return estoqueRepository.findAll();
    }
    // metodo para salvar Veiculos
    public Estoque salvarestoque (Estoque estoque) {
        return estoqueRepository.save(estoque);

    }

    // metodo para deletar veiculos
    public void deletarestoque(Long id) {
        estoqueRepository.deleteById(id);
    }


}



