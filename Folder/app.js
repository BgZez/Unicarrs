// API base
const API = "http://localhost:8080/api/estoque";

// cache local
let veiculosCache = [];
let modelosLista = [];
let modeloIndex = 0;

// ----------------------
// carregar veiculos
// ----------------------
async function carregarVeiculos() {
  try {
    const res = await fetch(`${API}/listarestoque`);
    if (!res.ok) throw new Error("Falha ao buscar veículos");
    const data = await res.json();
    veiculosCache = Array.isArray(data) ? data : [];
    modelosLista = [...new Set(veiculosCache.map(v => (v.modelo || "").toString().toLowerCase()))];
    montarTabela(veiculosCache);
    montarGaleria(veiculosCache);
  } catch (err) {
    console.error(err);
    alert("Erro ao carregar veículos (veja console).");
  }
}

// ----------------------
// cadastrar
// ----------------------
document.getElementById("form-veiculo").addEventListener("submit", async (e) => {
  e.preventDefault();
  const novo = {
    marca: document.getElementById("marca").value.trim(),
    modelo: document.getElementById("modelo").value.trim(),
    ano: document.getElementById("ano").value,
    cor: document.getElementById("cor").value.trim(),
    preco: document.getElementById("preco").value.trim(),
    quilometragem: document.getElementById("quilometragem").value,
    foto: document.getElementById("foto").value.trim(),
    status: document.getElementById("status").value
  };

  try {
    const res = await fetch(`${API}/CadastrarVeiculo`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(novo)
    });
    if (!res.ok) throw new Error("Erro ao cadastrar");
    // limpa form
    e.target.reset();
    // recarrega
    await carregarVeiculos();
  } catch (err) {
    console.error(err);
    alert("Erro ao cadastrar veículo.");
  }
});

// ----------------------
// deletar
// ----------------------
async function deletarVeiculo(id) {
  if (!confirm("Deseja realmente excluir este veículo?")) return;
  try {
    const res = await fetch(`${API}/deletarestoque/${id}`, { method: "DELETE" });
    if (!res.ok) {
      const text = await res.text().catch(()=>"");
      throw new Error("Servidor retornou: " + text);
    }
    await carregarVeiculos();
  } catch (err) {
    console.error(err);
    alert("Erro ao excluir veículo. Verifique console / CORS / rota.");
  }
}

// ----------------------
// montar tabela
// ----------------------
function montarTabela(lista) {
  const tbody = document.querySelector("#tabela tbody");
  tbody.innerHTML = "";
  lista.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.id ?? ""}</td>
      <td>${item.marca ?? ""}</td>
      <td>${item.modelo ?? ""}</td>
      <td>${item.ano ?? ""}</td>
      <td>${item.cor ?? ""}</td>
      <td>R$ ${item.preco ?? ""}</td>
      <td>${item.quilometragem ?? ""}</td>
      <td>${item.status ?? ""}</td>
      <td>${item.foto ? `<img src="${item.foto}" class="thumb" alt="foto">` : '<span>—</span>'}</td>
      <td><button class="btn-delete" onclick="deletarVeiculo(${item.id})">Excluir</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// ----------------------
// montar galeria (com placeholder se sem foto)
// ----------------------
function montarGaleria(lista) {
  const gal = document.getElementById("galeria");
  gal.innerHTML = "";
  lista.forEach(item => {
    const foto = (item.foto && item.foto.trim()) ? item.foto : "https://via.placeholder.com/400x250?text=Sem+Foto";
    const card = document.createElement("div");
    card.className = "car-card";
    card.dataset.marca = (item.marca || "").toString().toLowerCase();
    card.dataset.modelo = (item.modelo || "").toString().toLowerCase();
    card.dataset.ano = (item.ano || "").toString();
    card.dataset.status = (item.status || "").toString().toLowerCase();

    card.innerHTML = `
      <img src="${foto}" alt="${item.modelo ?? 'Veículo'}">
      <div class="info">
        <h3>${item.marca ?? ""} ${item.modelo ?? ""}</h3>
        <p><strong>Ano:</strong> ${item.ano ?? ""}</p>
        <p><strong>Cor:</strong> ${item.cor ?? ""}</p>
        <p class="preco">R$ ${item.preco ?? ""}</p>
      </div>
    `;

    gal.appendChild(card);
  });
}

// ----------------------
// filtros
// ----------------------
document.getElementById("btn-aplicar").addEventListener("click", aplicarFiltros);
document.getElementById("btn-limpar").addEventListener("click", () => {
  document.getElementById("filtro-marca").value = "";
  document.getElementById("filtro-modelo").value = "";
  document.getElementById("filtro-ano").value = "";
  document.getElementById("filtro-status").value = "";
  montarTabela(veiculosCache);
  montarGaleria(veiculosCache);
});

function aplicarFiltros() {
  const marca = document.getElementById("filtro-marca").value.trim().toLowerCase();
  const modelo = document.getElementById("filtro-modelo").value.trim().toLowerCase();
  const ano = document.getElementById("filtro-ano").value.trim();
  const status = document.getElementById("filtro-status").value.trim().toLowerCase();

  const filtrados = veiculosCache.filter(v => {
    if (marca && !(v.marca || "").toLowerCase().includes(marca)) return false;
    if (modelo && !(v.modelo || "").toLowerCase().includes(modelo)) return false;
    if (ano && (v.ano || "").toString() !== ano) return false;
    if (status && (v.status || "").toLowerCase() !== status) return false;
    return true;
  });

  montarTabela(filtrados);
  montarGaleria(filtrados);
}
// ----------------------
// setas de navegação de modelos
// ----------------------
document.getElementById("btn-prev").addEventListener("click", () => {
  if (modelosLista.length === 0) return;
  modeloIndex = (modeloIndex - 1 + modelosLista.length) % modelosLista.length;
  document.getElementById("filtro-modelo").value = modelosLista[modeloIndex];
});
document.getElementById("btn-next").addEventListener("click", () => {
  if (modelosLista.length === 0) return;
  modeloIndex = (modeloIndex + 1) % modelosLista.length;
  document.getElementById("filtro-modelo").value = modelosLista[modeloIndex];
});

// ----------------------
// refresh button
// ----------------------
document.getElementById("btn-refresh").addEventListener("click", carregarVeiculos);

// ----------------------
// iniciar
// ----------------------
carregarVeiculos();

