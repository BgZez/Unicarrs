package br.com.Unicarrs.controller;

import br.com.Unicarrs.model.Estoque;
import br.com.Unicarrs.repository.EstoqueRepository;
import br.com.Unicarrs.services.EstoqueServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/estoque")
@CrossOrigin(
        origins = "http://127.0.0.1:5500",
        allowedHeaders = "*",
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE}
)
public class EstoqueController {

    @Autowired
    private EstoqueServices estoqueServices;

        //endpoint para listar contatos

    @GetMapping("/listarestoque")
    public List<Estoque> listarestoque() {
        return estoqueServices.listarestoque();
    }
    @PostMapping("/CadastrarVeiculo")
    public ResponseEntity<Estoque> salvarVeiculo(@RequestBody Estoque estoque) {
        Estoque newveiculo = estoqueServices.salvarestoque(estoque);
        return ResponseEntity.status(HttpStatus.CREATED).body(newveiculo);
    }
    @DeleteMapping("/deletarestoque/{id}")
    public ResponseEntity<Void> deletarEstoque(@PathVariable Long id) {
        estoqueServices.deletarestoque(id);
        return ResponseEntity.noContent().build();
    }

}



